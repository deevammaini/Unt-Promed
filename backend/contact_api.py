from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import os
from datetime import datetime, timezone

app = Flask(__name__)
CORS(app)

# Read DB config from env with defaults
DB_HOST = os.environ.get('DB_HOST', 'localhost')
DB_PORT = int(os.environ.get('DB_PORT', 3306))
DB_USER = os.environ.get('DB_USER', 'root')
DB_PASSWORD = os.environ.get('DB_PASSWORD', 'deevammaini')
DB_NAME = os.environ.get('DB_NAME', 'upm_dubai')


def get_connection():
    return mysql.connector.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        password=DB_PASSWORD,
        database=DB_NAME,
        autocommit=False
    )


def ensure_table_exists():
    conn = None
    try:
        conn = get_connection()
        cursor = conn.cursor()
        cursor.execute(f"""
            CREATE TABLE IF NOT EXISTS contacts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                full_name VARCHAR(255),
                email VARCHAR(255),
                country_code VARCHAR(10),
                phone VARCHAR(50),
                industry VARCHAR(100),
                message TEXT,
                created_at DATETIME
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        """)
        cursor.close()
    except Exception as e:
        app.logger.error('Error ensuring table exists: %s', e)
    finally:
        if conn:
            conn.close()


@app.route('/contact', methods=['POST', 'OPTIONS'])
def contact():
    if request.method == 'OPTIONS':
        return jsonify({'success': True}), 200
    
    try:
        data = request.get_json(force=True)
        print(f"[DEBUG] Received data: {data}")
        if not data:
            return jsonify({'success': False, 'message': 'Invalid request'}), 400

        full_name = data.get('fullName') or data.get('full_name') or ''
        email = data.get('email') or ''
        country_code = data.get('countryCode') or data.get('country_code') or ''
        phone = data.get('phone') or ''
        industry = data.get('industry') or ''
        message = data.get('message') or ''

        print(f"[DEBUG] Parsed: name={full_name}, email={email}, phone={phone}, industry={industry}")

        conn = None
        try:
            conn = get_connection()
            print(f"[DEBUG] Connected to {DB_NAME} on {DB_HOST}")
            cursor = conn.cursor()
            
            insert_sql = """
                INSERT INTO contacts (full_name, email, country_code, phone, industry, message, created_at)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
            """
            # use timezone-aware UTC then convert to naive UTC for DATETIME column
            created_at = datetime.now(timezone.utc).replace(tzinfo=None)
            
            print(f"[DEBUG] Executing SQL with values: ({full_name}, {email}, {country_code}, {phone}, {industry}, {message}, {created_at})")
            cursor.execute(insert_sql, (full_name, email, country_code, phone, industry, message, created_at))
            
            # Explicitly commit if autocommit is off
            if not conn.autocommit:
                conn.commit()
                print("[DEBUG] Manual commit executed")
            else:
                print("[DEBUG] Autocommit is enabled")
            
            rows_affected = cursor.rowcount
            print(f"[DEBUG] Rows affected: {rows_affected}")
            cursor.close()
            
            return jsonify({'success': True, 'message': 'Thank you! Your message has been received.'})
        except mysql.connector.Error as err:
            print(f"[ERROR] MySQL error: {err}")
            app.logger.error('MySQL error: %s', err)
            return jsonify({'success': False, 'message': f'Database error: {err}'}), 500
        except Exception as e:
            print(f"[ERROR] Unexpected error: {e}")
            app.logger.error('Unexpected error: %s', e)
            return jsonify({'success': False, 'message': f'Server error: {e}'}), 500
        finally:
            if conn and conn.is_connected():
                conn.close()
                print("[DEBUG] Connection closed")
    except Exception as e:
        print(f"[ERROR] Request handling error: {e}")
        app.logger.error('Request handling error: %s', e)
        return jsonify({'success': False, 'message': f'Request error: {e}'}), 500


if __name__ == '__main__':
    # Ensure table exists before starting
    ensure_table_exists()
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)

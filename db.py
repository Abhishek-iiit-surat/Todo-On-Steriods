import psycopg2

# Connection details
DB_NAME = "Todo_On_Steroids"
DB_USER = "postgres"
DB_PASSWORD = "xts25000"
DB_HOST = "localhost"
DB_PORT = "5432"

try:
    # Connect to PostgreSQL
    conn = psycopg2.connect(
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )

    # Create a cursor
    cur = conn.cursor()

    # Test query
    cur.execute("SELECT version();")
    version = cur.fetchone()
    print("Connected to:", version)

    # Close
    cur.close()
    conn.close()

except Exception as e:
    print("Error:", e)

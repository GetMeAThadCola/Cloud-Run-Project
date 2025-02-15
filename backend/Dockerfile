# Use Python 3.9
FROM python:3.9

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy all files into container
COPY . .

# Start Gunicorn server
CMD ["gunicorn", "-b", "0.0.0.0:8080", "app:app"]

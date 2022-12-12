FROM python:3.10-alpine
WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .
EXPOSE 5000/tcp
ENV DEBUG=True

CMD [ "python3", "-m", "flask", "run", "--host=0.0.0.0" ]
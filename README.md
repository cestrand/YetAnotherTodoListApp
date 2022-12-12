
This is simple Web application created with Flask.

## How to run
First, make sure to install dependencies from `requirements.txt` file with
```
pip install -r requirements.txt
```

### Locally
Run either
```
python -m flask app run
```
or directly run `./app.py` script.

### As docker container
```
docker-compose up
```
Optionally you may add `-d` option to command above to run in detached mode.
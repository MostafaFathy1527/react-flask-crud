from app import app, db

with app.app_context():
    db.create_all()
    
flask db init  
flask db migrate     
flask db upgrade

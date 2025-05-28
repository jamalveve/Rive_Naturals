
# Rive Naturals Backend

Spring Boot REST API backend for the Rive Naturals skincare e-commerce platform.

---

## 🚀 Features

- User authentication and registration
- Product management (CRUD, image upload)
- Cart management (add, update, delete)
- Custom health checks (Spring Boot Actuator)
- MySQL database integration
- CORS configured for frontend integration

---

## 🛠️ Tech Stack

- Java 
- Spring Boot (Web, Data JPA, Security, Actuator,Junits)
- MySQL

---

## 📦 Installation

### Prerequisites

- Java 
- Maven
- MySQL

### Steps

1. **Clone the repository:**
   
   git clone https://github.com/jamalveve/Rive_Naturals.git
   cd rive-naturals-backend
  

2. **Configure MySQL:**
   - Create a database:
     
     CREATE DATABASE skincare_app;
    
   - Update `src/main/resources/application.properties` with your DB credentials:
    
     spring.datasource.url=jdbc:mysql://localhost:3306/skincare_app
     spring.datasource.username=YOUR_USERNAME
     spring.datasource.password=YOUR_PASSWORD
     spring.jpa.hibernate.ddl-auto=update
     management.endpoints.web.exposure.include=health,info


3. **Install dependencies & run:**
   
   mvn clean install
   mvn spring-boot:run

   The API will be available at [http://localhost:8080](http://localhost:8080).

4. **Product Images:**
   - Place images in `src/main/resources/static/product-images/`
   - Store `/product-images/filename.jpg` as the image path in the database.

---

## ⚙️ Configuration

- **CORS:** Controllers use `@CrossOrigin(origins = "http://localhost:5173")` for frontend integration.
- **Actuator:** Health endpoints are exposed for monitoring:

  management.endpoints.web.exposure.include=health,info
 

---

## 🗂️ Project Structure

```
src/main/java/com/riveNaturals/
  model/        # Entities (User, Product, Cart)
  repository/   # JPA repositories
  service/      # Business logic
  controller/   # REST controllers
  config/       # Security, CORS, etc.
  health/       # Custom health indicators
  RiveNaturalsBackendApplication.java
resources/
  static/       # Static files (product images)
  application.properties


---



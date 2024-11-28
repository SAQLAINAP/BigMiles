# 🚗 Fuel Cost Calculator ⛽  
**Plan your road trips like a pro!**  
Pick your car, enter your trip details, and watch the numbers crunch themselves into a perfect estimate. 🚀  

---

## 🛠 Features  

- **Car Selector**: Choose from a dropdown of cars with mileage preloaded for accuracy.  
- **Cost Calculator**: Enter locations or distances manually to see fuel usage and cost instantly.  
- **Responsive Design**: Built for all devices. Looks good. Feels better.  
- **Speedy Backend**: No waiting, just results.  
- **No Fluff**: Simplicity is the ultimate sophistication.  

---

## 🔧 Tech Stack  

| **Frontend**  | **Backend**      | **Styling**        | **Data Source**     |  
|---------------|------------------|--------------------|---------------------|  
| React.js      | Node.js, Express | Tailwind CSS       | Local JSON Dataset  |  
| Axios         |                  | Animations (AOS)   |                     |  

---

## 🚀 How It Works  

1. **Select Your Car**: The dropdown is smarter than it looks. 😉  
2. **Enter Your Journey**: From-to or just distance. We’ve got you covered.  
3. **Fuel Price**: Input today’s rate and hit calculate.  
4. **Magic Happens**: Instant fuel required and cost estimation.  

---

## 🎉 Try It Yourself!  

### **Setup Steps**  

1. **Clone the Repo**:  
   ```bash  
   git clone https://github.com/your-username/fuel-cost-calculator.git  
   cd fuel-cost-calculator  
   ```  

2. **Run the Backend**:  
   ```bash  
   cd CarAppBackend  
   npm install  
   node server.js  
   ```  

3. **Run the Frontend**:  
   ```bash  
   cd CarAppFrontend  
   npm install  
   npm start  
   ```  

4. **Head to**: [http://localhost:3000](http://localhost:3000) and start calculating!  

---

## 🔍 API Cheat Sheet  

### **`GET /api/cars/cars`**  
Returns all cars in the dropdown.  

- **Response Example**:  
  ```json  
  [  
    {  
      "_id": "a6fb963d-6d91-4191-bff5-509f037c6116",  
      "Name": "Maruti Wagon R LXI CNG",  
      "Mileage": "26.6 km/kg"  
    }  
  ]  
  ```  

### **`POST /api/cars/calculate-cost`**  
Send trip details and receive fuel estimates.  

- **Request**:  
  ```json  
  {  
    "carId": "a6fb963d-6d91-4191-bff5-509f037c6116",  
    "source": "Bengaluru",  
    "destination": "Mysore",  
    "fuelPrice": 100  
  }  
  ```  
- **Response**:  
  ```json  
  {  
    "fuelRequired": "5.45",  
    "totalCost": "545.00"  
  }  
  ```  

---

## 🎨 UI Highlights  

- **Dropdown Awesomeness**: Sleek car selection with mileage details.  
- **Instant Results**: No page reloads, no delays.  
- **Animations**: A sprinkle of motion, just enough to delight.  

---

## 🌟 Room to Grow  

- Add maps for real-time distance calculations.  
- Save journeys with user accounts.  
- More cars, more styles, more awesome.  

---

## 💬 Feedback  

Found a bug? Have a feature request? Let's talk: [saqlainahmed302@yopmail.com](mailto:saqlainahmed302@yopmail.com).  

---  

Made with ❤️ for road-trippers, by a SAP. 🚗💨  

---  

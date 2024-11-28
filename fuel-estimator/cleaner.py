import json

# Load the JSON file
with open('../files/Cardetails.json', 'r') as file:
    data = json.load(file)

# Define the attributes to keep
relevant_keys = [
    "Name", "Year", "Fuel_Type", "Transmission", 
    "Mileage", "Engine", "Power", "Seats", "Price"
]

# Filter the data
cleaned_data = []
for record in data:
    cleaned_record = {key: record[key] for key in relevant_keys if key in record}
    cleaned_data.append(cleaned_record)

# Save the cleaned data to a new JSON file
with open('CleanedCardetails.json', 'w') as file:
    json.dump(cleaned_data, file, indent=4)

print("Data cleaned and saved as 'CleanedCardetails.json'")
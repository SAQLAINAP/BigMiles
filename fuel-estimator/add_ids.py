import json
import uuid

# Load the JSON data
with open('CleanedCarDetails.json', 'r') as file:
    data = json.load(file)

# Add a unique ID to each car
for car in data:
    car['_id'] = str(uuid.uuid4())  # Generate a unique identifier

# Save the updated JSON data back to a file
with open('UpdatedCarDetails.json', 'w') as file:
    json.dump(data, file, indent=4)

print("IDs added successfully. Saved as 'UpdatedCarDetails.json'")

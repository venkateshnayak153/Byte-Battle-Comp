// Database seeding script for LeadFlow AI
// This would typically connect to MongoDB and seed initial data

const seedData = {
  serviceProviders: [
    {
      id: 1,
      businessName: "ABC Plumbing Services",
      email: "contact@abcplumbing.com",
      serviceType: "plumbing",
      location: "Downtown",
      rating: 4.8,
      completedJobs: 156,
      joinDate: "2023-01-15",
    },
    {
      id: 2,
      businessName: "ElectricPro Solutions",
      email: "info@electricpro.com",
      serviceType: "electrical",
      location: "Suburbs",
      rating: 4.9,
      completedJobs: 203,
      joinDate: "2022-11-20",
    },
    {
      id: 3,
      businessName: "Cool Air HVAC",
      email: "service@coolair.com",
      serviceType: "hvac",
      location: "Uptown",
      rating: 4.7,
      completedJobs: 89,
      joinDate: "2023-03-10",
    },
  ],

  customers: [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      location: "Downtown",
      joinDate: "2023-06-15",
      totalRequests: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      location: "Suburbs",
      joinDate: "2023-08-22",
      totalRequests: 3,
    },
    {
      id: 3,
      name: "Mike Davis",
      email: "mike.davis@email.com",
      location: "Uptown",
      joinDate: "2023-09-05",
      totalRequests: 7,
    },
  ],

  serviceRequests: [
    {
      id: 1,
      customerId: 1,
      serviceType: "plumbing",
      title: "Kitchen Sink Leak Repair",
      description:
        "My kitchen sink has been leaking under the cabinet for 2 days. Water is pooling and I'm concerned about damage.",
      urgency: "urgent",
      budget: "100-500",
      location: "Downtown",
      status: "active",
      aiScore: 92,
      createdAt: "2024-01-15T10:30:00Z",
    },
    {
      id: 2,
      customerId: 2,
      serviceType: "electrical",
      title: "Outlet Installation",
      description: "Need 3 new outlets installed in my home office. Planning to set up a new workspace.",
      urgency: "normal",
      budget: "500-1000",
      location: "Suburbs",
      status: "active",
      aiScore: 78,
      createdAt: "2024-01-14T14:15:00Z",
    },
    {
      id: 3,
      customerId: 3,
      serviceType: "hvac",
      title: "AC Unit Maintenance",
      description: "Annual maintenance check for my central air conditioning system before summer.",
      urgency: "flexible",
      budget: "under-100",
      location: "Uptown",
      status: "completed",
      aiScore: 65,
      createdAt: "2024-01-10T09:00:00Z",
    },
  ],

  appointments: [
    {
      id: 1,
      serviceRequestId: 1,
      providerId: 1,
      customerId: 1,
      scheduledDate: "2024-01-18T10:00:00Z",
      status: "confirmed",
      serviceType: "plumbing",
      estimatedDuration: 120,
      notes: "Bring pipe repair materials",
    },
    {
      id: 2,
      serviceRequestId: 2,
      providerId: 2,
      customerId: 2,
      scheduledDate: "2024-01-20T14:00:00Z",
      status: "pending",
      serviceType: "electrical",
      estimatedDuration: 180,
      notes: "Site inspection first",
    },
  ],

  reviews: [
    {
      id: 1,
      customerId: 1,
      providerId: 1,
      serviceRequestId: 1,
      rating: 5,
      comment: "Excellent service! Fixed the leak quickly and cleaned up perfectly. Highly recommend ABC Plumbing.",
      createdAt: "2024-01-12T16:30:00Z",
    },
    {
      id: 2,
      customerId: 2,
      providerId: 2,
      serviceRequestId: 2,
      rating: 4,
      comment: "Professional work and fair pricing. ElectricPro was punctual and efficient.",
      createdAt: "2024-01-08T11:45:00Z",
    },
  ],
}

// In a real application, this would connect to MongoDB and insert the data
console.log("Database seeding data prepared:", seedData)
console.log("Total Service Providers:", seedData.serviceProviders.length)
console.log("Total Customers:", seedData.customers.length)
console.log("Total Service Requests:", seedData.serviceRequests.length)
console.log("Total Appointments:", seedData.appointments.length)
console.log("Total Reviews:", seedData.reviews.length)

// Export for use in the application
if (typeof module !== "undefined" && module.exports) {
  module.exports = seedData
}

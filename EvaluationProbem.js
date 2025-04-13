// Implement a function that calculates fines for overdue library books. Use Higher Order Functions to create reusable fine calculators that can be combined.
// Input:
// Fine strategies:
// - $0.25 per day for standard items
// - Double fine for reserved items
// - Maximum $10 fine for periodicals
// - 50% discount on fines if returning 3+ items at once
// Expected Output:

// Original fine amount: $16.00
// After special category adjustments: $19.00
// Final fine after all calculations: $9.50
items: [
  { title: "Harry Potter", daysOverdue: 5, category: "Fiction", isReserved: false },
  { title: "Physics Textbook", daysOverdue: 12, category: "Academic", isReserved: true },
  { title: "Cooking Magazine", daysOverdue: 3, category: "Periodical", isReserved: false },
  { title: "Programming Guide", daysOverdue: 8, category: "Academic", isReserved: false }
];

// - $0.25 per day for standard items
function abc(fine){
  items.reduce((acc,curr)=>{
    acc+=curr.title
  },0)
  console.log()
}

// - Double fine for reserved items
let result1 = items.reduce((acc,curr)=>{
  if(curr.isReserved==true){
        
  }
},0)



import React from 'react'


const rule=[
    {text:"Borrowing Period: Books can be borrowed for a maximum period of 1 month. The due date will be specified at the time of borrowing."},
    {text:"Book Condition: Borrowers must ensure that the borrowed books are returned in the same condition as they were when borrowed."},
    {text:"Responsibility: Borrowers are responsible for any damage or loss incurred to the borrowed books during the borrowing period."},
    {text:"Mild Damage: If a book is returned with mild damage, such as torn pages or minor markings, the borrower will be charged a fine of Rp.100,000."},
    {text:"Severe Damage: In case a book is returned with severe damage, making it unusable or significantly affecting its value, the borrower will be required to pay the full price of the book."},
    {text:"Reporting Damage: Borrowers must report any damage noticed in the borrowed book immediately upon receipt. This will ensure that they are not held responsible for pre-existing damage."},
    {text:"Inspection: The library reserves the right to inspect the condition of the book before lending and after its return. Borrowers may be asked to accompany library staff during the inspection."},
    {text:"Fine Payment: Fines for mild damage should be paid at the library's designated payment counter upon returning the book. The payment for severe damage will be determined by the library staff and must be made promptly."},
    {text:"Replacement of Lost Books: In the event of a lost book, the borrower will be required to pay the full replacement cost of the book. This cost will be determined by the library"},
    {text:"Overdue Books: Borrowers should return books on or before the due date. Late returns may incur additional fines or affect borrowing privileges."},
    {text:"Maximum Book Limit: Borrowers may have a maximum limit of books they can borrow at a time."},
    {text:"Courtesy and Respect: Borrowers should handle library books with care and respect the rights of other members to access and borrow books."},
    {text:"Booking System: Borrowers may reserve books that are currently on loan. Once the book becomes available, the borrower will be notified to collect it within a specified period."},
    {text:"Fine system: Rp.1000/day "},

]


export const Rules = ({onClose,bookingHandler}) => {
  return (
    <div>
        <h1>Terms & Conditions</h1>
        <div style={{ height:"300px",overflow:"scroll",overflowX:"hidden",marginBottom:"20px",marginTop:"20px" }}>
            <ol>
               { rule.map((t)=>{return(<li>{t.text}</li>)})}
            </ol>
        </div>
        <button onClick={onClose}>Cancel</button>
        <button onClick={bookingHandler}>Agree</button>
    </div>
  )
}

















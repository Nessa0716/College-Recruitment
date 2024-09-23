const teamMembers = [
  {
    name: "Financial Aid Overview",
    Information: "Financial aid refers to funds provided to students to help pay for college. It comes in various forms, including grants, scholarships, work-study programs, and loans.",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqAIpisd0Bp3cnsGZ5fJqq8ljAxgtypTANX3ifA3Z1VcKfvJ86I4fT0vYLuUckQS22ow&usqp=CAU",
    items: [
      'Federal Aid: Learn about Pell Grants, Direct Loans, and more.',
      'State Aid: Discover state-specific grants and scholarships available to you.',
      'Institutional Aid: Explore scholarships and grants offered by us.',
      'Private Scholarships: Access resources to find external scholarship opportunities.'
    ]
  },
  {
    name: "How to Apply for Financial Aid",
    Information: "Follow our easy guides to complete your applications",
    imageURL: "https://th.bing.com/th/id/R.5eda45d7411e80572b61bc1f5f554c15?rik=36OHaCVniAWwCw&riu=http%3a%2f%2fwww.miamioh.edu%2f_files%2fimages%2ffinancial-aid%2fsmart-investment.png&ehk=Re0kcYcrbLgHvnkVqNFcVzwhZTV6wQo%2bc9jnDGRjToE%3d&risl=&pid=ImgRaw&r=0",
    items: [
      'FAFSA: Use the Free Application for Federal Student Aid to learn if you are eligible for grants, scholarships, work-study programs, and loans for college or career school.',
      'CSS Profile: The CSS Profile is an online application used by colleges and scholarship programs to award non-federal institutional aid.',
      'Institutional Scholarships: Scholarships are types of aid that do not require repayment. They come from many sources and can be based on criteria that includes, but not limited to academic achievement, athletic ability, geographical location, departmental and community involvement, areas of study, and/or financial need, as well as other factors.',
      'Stay on track with our comprehensive deadlines.'
    ]
  },
  {
    name: "Financial Literacy Resources",
    Information: "Explore our resources to enhance your financial literacy.",
    imageURL: "https://fpa.miami.edu/_assets/images/um-slider-large.jpg",
    items: [
      'Budgeting Tools: Utilize our interactive budgeting worksheets to manage your expenses.',
      'Cost of Attendance: Get a detailed breakdown of tuition, fees, and other expenses.',
      'Financial Literacy Workshops: Join our workshops to enhance your financial management skills.'
    ],
    links: {
      budgeting: "https://finaid.miami.edu/resources/fiscal-fitness/Budgeting/index.html",
      costOfAttendance: "https://finaid.miami.edu/cost/index.html",
      workshops: "https://www.library.miami.edu/research/workshops-tutorials.html"
    }
  },
];

function createBulletList(items) {
  const ul = document.createElement('ul');

  for (const item of items) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  }

  return ul; 
}

function generateTeamCards() {
  const teamCardsContainer = document.getElementById("teamCards");

  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    let backgroundColor = "#cccccc"; 

    card.innerHTML = `
      <div class="card">
          <div class="card-header">
              ${member.name}
          </div>
          <img src="${member.imageURL}" class="image-fluid">
          <div class="card-body" style="background-color:${backgroundColor};">
              <p><strong>Information:</strong> ${member.Information}</p>
          </div>
      </div>
    `;

    // If the member has items, create a bullet list
    if (member.items) {
      const bulletList = createBulletList(member.items);
      card.querySelector('.card-body').appendChild(bulletList);
      
      // Adding links for Financial Literacy Resources
      if (member.links) {
        const budgetingLink = document.createElement('p');
        budgetingLink.innerHTML = `<a href="${member.links.budgeting}" target="_blank">Budgeting Tools</a>`;

        const costLink = document.createElement('p');
        costLink.innerHTML = `<a href="${member.links.costOfAttendance}" target="_blank">Cost of Attendance</a>`;

        const workshopsLink = document.createElement('p');
        workshopsLink.innerHTML = `<a href="${member.links.workshops}" target="_blank">Financial Literacy Workshops</a>`;

        card.querySelector('.card-body').appendChild(budgetingLink);
        card.querySelector('.card-body').appendChild(costLink);
        card.querySelector('.card-body').appendChild(workshopsLink);
      }
    }

    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards;

// FORM START
document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  const email = document.getElementById('email').value;
  // Retrieves the value entered (below)
  const message = document.getElementById('message');


  // this part displays a message on the screen
  message.textContent = `Thank you for signing up, ${email}!`;
  
  // Clear the input field
  document.getElementById('email').value = '';
});
/**faq interaction */
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const plusIcon = item.querySelector('.faq-1 img:nth-child(1)');
  const minusIcon = item.querySelector('.faq-1 img:nth-child(2)');

  question.addEventListener('click', () => {
    answer.classList.toggle('active');
    plusIcon.classList.toggle('hidden');
    minusIcon.classList.toggle('hidden');
  });
});


/**login-button button */
document.getElementById("tryForFreeBtn").addEventListener("click", function() {
    document.querySelector(".toplogin").classList.add("clicked");
});

document.getElementById("log-in").addEventListener("click", function() {
    document.querySelector(".toplogin").classList.add("clicked");
});

/**signuóup-button */
document.getElementById("signUpBtn").addEventListener("click", function() {
    // Navigate to "None"
    // Implement the navigation logic here, such as preventing default action or redirecting

    document.querySelector(".intro-button").classList.add("clicked");
});
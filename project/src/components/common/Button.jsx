function button({ innerText, onClick }) {
  return <button onClick={onClick}>{innerText}</button>;
}

export default button;

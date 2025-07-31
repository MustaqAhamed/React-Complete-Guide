export default function TabButton({ children,  isSelected, ...props}) {
  // document.querySelector('button').addEventListener('click', () => {

  // })
  console.log("TABBUTTON COMPONENT EXECUTING");

  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
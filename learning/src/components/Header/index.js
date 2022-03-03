export default () => {
  const headerItem = [
    { name: "Home", isActive: true },
    { name: "About us" },
    { name: "Contact us" },
    { name: "Login", isDisable: true },
  ];

  return (
    <ul className="nav nav-pills">
      {headerItem.map((item) => {
        return (
          <li className="nav-item">
            {/* 
          example:
            - content = false && 'test' // =>  content = false
            - content = true && 'test' // ==> content = 'test'
            - content = false || 'test' // => content = 'test'
            - content = "content" || 'test' => content = 'content'
            - content = true || 'test' // => content = true
        */}
            <a
              className={`nav-link ${(item.isActive && "active") || ""} ${
                (item.isDisable && "disabled") || ""
              }`}
              href={`#${item.name}`}
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

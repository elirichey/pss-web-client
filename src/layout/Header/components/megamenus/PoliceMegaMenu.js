import MainMenuLinks from "../../data/MainMenuLinks";

export default function PoliceMegaMenu(props) {
  const { refProp } = props;
  const { police } = MainMenuLinks;

  return (
    <div id="mega-menu-police" className="mega-menu" ref={refProp}>
      <div className="flex row">
        <div className="flex column">
          <span className="title">Police_Category</span>
          <ul>
            <li>List_Items</li>
            <li>List_Items</li>
            <li>List_Items</li>
          </ul>

          <span className="title pt-15">Police_Category</span>
          <ul>
            <li>List_Items</li>
            <li>List_Items</li>
            <li>List_Items</li>
            <li>List_Items</li>
            <li>List_Items</li>
          </ul>
        </div>

        <div className="flex column">
          <span className="title">Police_Category</span>
          <ul>
            <li>List_Items</li>
            <li>List_Items</li>
            <li>List_Items</li>
          </ul>
          <span className="title pt-15">Police_Category</span>
          <ul>
            <li>List_Items</li>
            <li>List_Items</li>
            <li>List_Items</li>
            <li>List_Items</li>
            <li>List_Items</li>
          </ul>
        </div>

        <div className="flex column">
          <span className="title">Police_Category</span>
          <ul>
            <li>List_Items</li>
            <li>List_Items</li>
            <li>List_Items</li>
          </ul>
          <span className="title pt-15">Police_Category</span>
          <ul>
            <li>List_Items</li>
            <li>List_Items</li>
            <li>List_Items</li>
            <li>List_Items</li>
            <li>List_Items</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

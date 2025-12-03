import ListGroup from "./components/ListGroup";
function App() {
  let items = ["An item", "A second item", "A third item", "A fourth item", "And a fifth one"];
  const handleSelection = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup items={items} heading="Items" onSelectItem={handleSelection} />
    </div>
  );
}
export default App;
    
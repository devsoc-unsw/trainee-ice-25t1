// This now uses ListData.json but that would become the list from
// the subject panel once that's finished.

import data from "./ListData.json"

type ListProps = {
  input: string;
};

function List({ input }: ListProps) {
    const filteredData = data.filter((el) => {
        if (input === '') {
            return el;
        }
        else {
            return el.text.toLowerCase().includes(input)
        }
    })
    console.log("Filtered data:", filteredData);
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List

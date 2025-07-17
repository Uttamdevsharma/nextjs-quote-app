const quotes = [
    { id: 1, text: "Stay hungry, stay foolish. – Steve Jobs" },
    { id: 2, text: "Be yourself; everyone else is already taken. – Oscar Wilde" },
    { id: 3, text: "Do what you can, with what you have, where you are. – Theodore Roosevelt" },
];

export default function Quotes() {
    return(
        <div>
            <h1>Quotes</h1>
            <ul>
                {quotes.map((quote) => (
                    <li key={post.id}> {post.text} </li>
                ))}
            </ul>
        </div>
    )
}
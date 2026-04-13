import { useState } from "react";

export default function Card() {
    const [cardText, setCardtext] = useState("Ace of Spades")
    return (
        <h2 style={{ padding: "1rem",
                     display: "flex", flexDirection: "column", gap: "12px", alignItems: "center",
                     border: "solid black", borderRadius: "10px"
        }}>
            {cardText}
            <button onClick={() => setCardtext("Two of Clubs")}>Nah.</button>
        </h2>
    )
  }
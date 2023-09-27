import MyButton from "./MyButton";
import MyList from "./MyList";

export default function Home() {
    return (
        <div>
            <h1>Hello World</h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <MyButton />
                <MyList />
            </div>
        </div>
    );
}

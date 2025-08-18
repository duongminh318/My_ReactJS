import MainContent from "./MainContent.jsx";
import { myData } from "../../../data.js";
import Section from "./Section.jsx";
export default function MainContents() {
    return (
        <Section id="core-concepts">
            <h2>Khái niệm chính trong React</h2>
            <ul>
                {
                    myData.map((item) => (
                        <MainContent key={item.title} {...item} />
                    ))
                }
            </ul>
        </Section>
    )
}
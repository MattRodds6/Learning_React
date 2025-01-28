import Section      from '../Section/Section.jsx';
import TabButton    from '../TabButton/TabButton.jsx';
import Tabs         from '../Tabs/Tabs.jsx';
import { useState } from 'react';

import { EXAMPLES } from '../../data.js';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(null);

    function eventHandeler(topic){
        setSelectedTopic(topic);
    }

    let tabContent = <p>Please Select a topic</p>;

    if(selectedTopic){
        tabContent =  
        <div id = "tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
        </div>;
    }

    return (
        <Section title = "Example" id = "examples">
          <Tabs 
            button = {
                <>
                    <TabButton isSelected = {selectedTopic === "components" }onClick={()=> eventHandeler("components")}>Components</TabButton>
                    <TabButton isSelected = {selectedTopic === "jsx"        }onClick={()=> eventHandeler("jsx")}>JSX</TabButton>
                    <TabButton isSelected = {selectedTopic === "props"      }onClick={()=> eventHandeler("props")}>Props</TabButton>
                    <TabButton isSelected = {selectedTopic === "state"      }onClick={()=> eventHandeler("state")}>State</TabButton>
                </> 
            }
          >
            {tabContent}
          </Tabs>
        </Section>
    );
}
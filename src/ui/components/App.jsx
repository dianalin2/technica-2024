// To support: theme="express" scale="medium" color="light"
// import these spectrum web components modules:
import "@spectrum-web-components/theme/express/scale-medium.js";
import "@spectrum-web-components/theme/express/theme-light.js";

// To learn more about using "swc-react" visit:
// https://opensource.adobe.com/spectrum-web-components/using-swc-react/
import { Button } from "@swc-react/button";
import { Theme } from "@swc-react/theme";
import React from "react";
import "./App.css";
import OpenAI from "openai";

const App = ({ addOnUISdk, sandboxProxy }) => {
    const [responseText, setResponseText] = React.useState("");

    async function handleClick() {
        const renditionOptions = {
            range: addOnUISdk.constants.Range.entireDocument,
            format: addOnUISdk.constants.RenditionFormat.png,
            backgroundColor: 0x7FAA77FF
        };

        const renditions = await addOnUISdk.app.document.createRenditions(
            renditionOptions, addOnUISdk.constants.RenditionIntent.export
        );

        const rendition = renditions[0];

        const openai = new OpenAI({
            organization: process.env.OPENAI_ORGANIZATION,
            project: process.env.OPENAI_PROJECT,
            apiKey: process.env.OPENAI_API_KEY,
            dangerouslyAllowBrowser: true
        });

        const reader = new FileReader();
        reader.readAsDataURL(rendition.blob);

        reader.onloadend = async function () {
            const response = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "user",
                        content: [
                            {
                                "type": "text",
                                "text": "Generate alt text for this image."
                            },
                            {
                                "type": "image_url",
                                "image_url": { "url": reader.result }
                            }
                        ]
                    }
                ],
                max_tokens: 500
            })

            setResponseText(response.choices[0].message.content);
        }
    }

    return (
        // Please note that the below "<Theme>" component does not react to theme changes in Express.
        // You may use "addOnUISdk.app.ui.theme" to get the current theme and react accordingly.
        <Theme theme="express" scale="medium" color="light">
            <div className="container">
                <Button size="m" onClick={handleClick}>
                    Generate Alt Text
                </Button>
                <br />
                <div>
                    <span>{responseText}</span>
                </div>
                <br />
                <Button size = "m" onClick={() =>  navigator.clipboard.writeText(responseText)}>
                    Copy Alt Text
                </Button>
            </div>
        </Theme>
    );
};

export default App;

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
    const [loading, setLoading] = React.useState(false);

    async function handleClick() {
        // hide button
        setLoading(true);

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
                                "text": "Generate alt text for this image, with no fluff text around it."
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

            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }

    function handleCopy() {
        navigator.clipboard.writeText(responseText);
    }

    return (
        // Please note that the below "<Theme>" component does not react to theme changes in Express.
        // You may use "addOnUISdk.app.ui.theme" to get the current theme and react accordingly.
        <main>
            <Theme theme="express" scale="medium" color="light">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src="https://file.garden/ZhkD9yUtsAenJzxk/logo.png"
                        alt="Logo"
                        className="logo"
                        style={{ height: "40px" }} />
                    <img src="https://file.garden/ZhkD9yUtsAenJzxk/font.png"
                        alt="Font"
                        className="font"
                        style={{ height: "40px" }} />
                </div>
                <div className="container" style={{ height: "80vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div onClick={responseText ? handleCopy : null}>
                        <h1>{responseText ? "Alt Text" : (loading ? "Loading..." : " ")}</h1>
                        <span>{responseText || " "}</span>
                        <div style={{ textAlign: "right" }}>
                            {responseText ?
                                <Button size="m" onClick={handleCopy}>
                                    Copy
                                </Button>
                                : null}
                        </div>
                    </div>
                    <br />
                    {loading ?
                        null
                        :
                        <Button size="m" onClick={handleClick}>
                            Generate Alt Text
                        </Button>
                    }
                </div>
            </Theme>
        </main>

    );
};

export default App;

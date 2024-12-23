import { validateURL, apiURL } from "../utils/utils"
import axios from "axios"

export async function getVideo(url) {
    return new Promise((res, rej) => {
        if (validateURL(url)) {
            axios.post(apiURL("/video-download"), { url: url })
                .then((result) => {
                    if (result.status === 200) {
                        res(result.data);
                        return;
                    }
                    rej("Could not process request");
                })
                .catch(x => {
                    rej("Could not process request");
                })
        }
        else rej("Invalid URL");
    });
}
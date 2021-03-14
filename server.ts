"use strict";

import app from "./src/app";

async function init() {
    await new Promise((resolve, reject) => {
        app.listen(3000, () => {
            resolve(null);
        });
    });

    console.log(
        `Your server is listening on port 3000 (http://localhost:3000)`
    );
}

const serverStarted = init().catch((error) => {
    process.exitCode = 1;
    console.error(error);
});

export default {
    application: app,
    whenInitialized: serverStarted,
};

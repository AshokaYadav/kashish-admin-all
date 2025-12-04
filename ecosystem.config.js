module.exports = {
    apps: [{
        name: "recharge-frontend",
        script: "node_modules/next/dist/bin/next",
        args: "start",
        cwd: "./",
        env: {
            NODE_ENV: "production",
            PORT: "8080"
        }
    }]
}

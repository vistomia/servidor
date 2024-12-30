<template>
    <div class="console">
        <div class="console-title container">
            <span>Console</span>
        </div>
        <div class="console-window container">
            <div id="data-container" class="font-monospace scrollable-div" @wheel="alo">
                <div v-for="log in logs" :key="log.timestamp">
                    <span>{{ log.message }}</span>
                </div>
            </div>
            <div class="container">
                <span>/</span> <input @keydown="keyListener" v-model="command" id="command" type="text" ref="commandInput"/>
            </div>
        </div>
    </div>
</template>

<script>
    const endpoint = 'http://localhost:3000/api'

    export default {
        data() {
            return {
                command: '',
                logs: [],
                buffer: [],
                autoScroll: true
            };
        },
        mounted() {
            this.$nextTick(() => {
                this.$refs.commandInput.focus();
            });
            this.getLogs();
            setInterval(() => this.displayData(), 1000);
        },
        methods: {
            alo(event) {
                console.log(event.currentTarget.scrollHeight - event.currentTarget.clientHeight, event.currentTarget.scrollTop)
                this.autoScroll = event.deltaY > 0 && event.currentTarget.scrollTop === event.currentTarget.scrollHeight - event.currentTarget.clientHeight;
            },
            keyListener(event) {
                if (event.key === "Enter") {
                    this.logs.push({ message: this.command, timestamp: Date.now() });
                    this.scrollToBottom();
                    fetch(endpoint + '/stdin', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ command: this.command })
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                        });
                    this.command = '';
                }
            },
            postCommand() {
                console.log('Command: ' + this.command);
            },
            getLogs() {
                fetch(endpoint + '/stdout')
                    .then(response => response.json())
                    .then(data => {
                        this.buffer = data.logs;
                    });
            },
            async displayData() {
                await this.getLogs();
                let log = this.buffer;
                for (let i = 0; i < log.length; i++) {
                    if (this.logs.some(existingLog => existingLog.message === log[i])) continue;
                    this.logs.push({ message: log[i], timestamp: Date.now() });
                    if (this.logs.length > 100) {
                        this.logs.shift();
                    }
                }
                if (this.autoScroll) this.scrollToBottom();
            },
            scrollToBottom() {
                const container = this.$el.querySelector("#data-container");
                container.scrollTop = container.scrollHeight;
            }
        }
    }
</script>

<style>

.scrollable-div {
    width: 100%;
    height: 400px;
    overflow-y: scroll; 
    box-sizing: border-box;
    scrollbar-color: #3d464f var(--color-dark);
    scrollbar-width: thin;
    flex-direction: column-reverse;
}

.console-window {
    font-family: var(--font-main);
    color: var(--color-light);
    background-color: var(--color-dark);
    border-radius: 0px 0px 4px 4px;
    padding-bottom: 8px;
    padding: 0px;
}

.console-window > div {
    padding-left: 14px;
    padding-right: 14px;
}

.console-title {
    font-family: var(--font-main);
    color: var(--color-light);
    font-weight: 700;
    background-color: #252F37;
    padding: 8px;
    padding-left: 14px;
    border-radius: 4px 4px 0px 0px;
}

#command {
    font-family: var(--font-main);
    color: var(--color-light);
    border-style: none;
    background-color: rgba(0,0,0,0);
    outline: none;
    width: calc( 100% - 25px);
    padding-bottom: 14px;
}
</style>
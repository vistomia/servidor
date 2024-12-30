<template>
    <div class="server">
        <div class="server-title container text-center">
            <span>servidor.teste.me</span>
        </div>
        <div v-if="serverStatus === 'no-connection'" class="server-status no-conection container text-center" id="server-status">
            No conection
        </div>
        <div v-else-if="serverStatus === 'offline'" class="server-status offline container text-center" id="server-status">
            Offline
        </div>
        <div v-else-if="serverStatus === 'online'" class="server-status online container text-center" id="server-status">
            Online
        </div>
        <div v-else class="server-status container loading text-center" id="server-status">
            Loading...
        </div>
    </div>
    <div class="text-center mt-4">
        <button v-if="serverStatus === 'offline'" id="button" type="button" class="btn btn-success  " @click="OnClick">Start</button>
        <button v-else-if="serverStatus === 'online'" id="button" type="button" class="btn btn-danger" @click="OnClick">Stop</button>
        <button v-else class="btn btn-warn" disabled>Loading</button>
    </div>
</template>

<script>

const endpoint = 'http://localhost:3000/api'

export default {
    data: () => ({
        serverStatus: 'loading'
    }),
    created() {
        this.getStatus();
        setInterval(this.getStatus, 2000);
    },
    watch: {
        serverStatus() {
            console.log('serverStatus changed', this.serverStatus);
        }
    },
    methods: {
        OnClick() {
            if (this.serverStatus === 'online') {
                this.postAction({ action: "stop" })
            } else if (this.serverStatus === 'offline') {
                this.postAction({ action: "start" })
            }
        },
        getStatus() {
            fetch(endpoint + '/status')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(this.serverStatus)
                    if (data.status === undefined) { throw new Error('no connection') }
                    this.serverStatus = data.status;
                })
                .catch(() => {
                    this.serverStatus = 'no-connection';
                });
        },
        postAction(data) {
            fetch(endpoint + '/action', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(responseData => {
                console.log('Sucesso:', responseData);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
        }
    }
}
</script>

<style>
.server-title {
    font-family: var(--font-main);
    color: var(--color-light);
    font-size: larger;
    font-weight: 700;
    background-color: var(--color-dark);
    padding: 32px;
    padding-left: 14px;
    border-radius: 4px 4px 0px 0px;
}

.server-status {
    font-weight: bold;
    color: var(--color-light);
    background-color: var(--color-danger);
    border-radius: 0px 0px 4px 4px;
    padding: 4px;
}

.online {
    background-color: var(--color-success);
}

.loading {
    background-color: var(--color-warn);
}
</style>
<template>
    <div class="console">
        <div class="console-title container">
            <span>Properties</span>
        </div>
        <div class="properties-window container">
            <textarea name="properties" v-model="properties" id="properties"  spellcheck="false"></textarea>
        </div>
    </div>
    <div class="container alo">
        <br>
        <button class="btn btn-save" @click="OnClick">save</button>
    </div>
</template>

<script>
    const endpoint = 'http://localhost:3000/api'
    export default {
        data: () => ({
            properties: ''
        }),
        created() {
            this.getProperties();
        },
        methods: {
            OnClick() {
                this.postProperties({ data: this.properties })
            },
            getProperties() {
                fetch(endpoint + '/properties')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.properties = data.data;
                    })
            },
            postProperties(properties) {
                fetch(endpoint + '/properties', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(properties)
                })
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                    })
            }
        }
    }
</script>

<style>

.alo {
    padding: 0;
}

.btn-save {
    background-color: var(--color-success);
    color: var(--color-light);
}

.scrollable-div {
    width: 100%;
    height: 400px;
    overflow-y: scroll; 
    box-sizing: border-box;
    scrollbar-color: #3d464f var(--color-dark);
    scrollbar-width: thin;
    flex-direction: column-reverse;
}

.properties-window {
    font-family: var(--font-main);
    color: var(--color-light);
    background-color: var(--color-dark);
    border-radius: 0px 0px 4px 4px;
    padding-bottom: 8px;
    padding: 0px;
    height: 600px;
}

textarea {
    outline: none;
    border: 0;
    box-shadow: none;
    padding: 10px;
    background-color: var(--color-dark);
    resize: none;
    height: calc(100% - 10px);
    width:  calc(100% - 20px);
    scrollbar-color: #3d464f var(--color-dark);
    scrollbar-width: thin;
    color: var(--color-light);
    font-family: var(--font-mono);
}

.properties-window > div {
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
</style>
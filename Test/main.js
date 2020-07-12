var VueJS = new Vue({
    el:"#app",
    data: {
        title:'Áo đấu',
        fullName:'',
        url:'http://google.com',
        target:'_blank',
        couter:0,
    },
    methods: {
        say:function (text) {
            return 'Hello '+text;
        },
        add:function () {
            return this.couter++;
        },
        remove:function () {
            if (this.couter==0) {
                return this.couter=0;
            }
            return this.couter--;
        }
    },
})
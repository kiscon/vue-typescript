import Api from "@/config/api"
const App =  {
    data () {
        return {
        list: [
            Math.random(),
            Math.random(),
            Math.random(),
            Math.random(),
        ]
        }
    },
    mounted() {
        // 打印不同的环境
        console.log(process.env.NODE_ENV);
        this.getData();
    },
    methods: {
        getData() {
            fetch(Api.base_api_url).then((res)=>{
                return res.json();
            }).then((data)=>{
                console.log(data);
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
}
export default App;
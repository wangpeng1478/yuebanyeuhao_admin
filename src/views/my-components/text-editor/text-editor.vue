<style lang="less">
    @import '../../../styles/loading.less';
</style>

<template>
    <div>
        <Card shadow>
            <textarea class='tinymce-textarea' id="tinymceEditer"></textarea>
        </Card>
        <Spin fix v-if="spinShow">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>加载组件中...</div>
        </Spin>
        <button @click='huoi'>回去</button>
    </div>
</template>

<script>
import tinymce from 'tinymce';
export default {
    name: 'text-editor',
    data () {
        return {
            spinShow: true
        };
    },
    methods: {
        init () {
            this.$nextTick(() => {
                let vm = this;
                let height = document.body.offsetHeight - 300;
                tinymce.init({
                    selector: '#tinymceEditer',
                    branding: false,
                    elementpath: false,
                    height: height,
                    language: 'zh_CN.GB2312',
                    // menubar: 'edit insert view format table tools',
                    // plugins: [
                    //     'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools',
                    //     'searchreplace visualblocks visualchars code fullpage',
                    //     'insertdatetime media nonbreaking save table contextmenu directionality',
                    //     'emoticons paste textcolor colorpicker textpattern imagetools codesample'
                    // ],
                    // toolbar1: ' newnote print preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
                    autosave_interval: '20s',
                    image_advtab: true,
                    paste_webkit_styles: true,
                    table_default_styles: {
                        width: '100%',
                        borderCollapse: 'collapse'
                    },
                    setup: function (editor) {
                        editor.on('init', function (e) {
                            vm.spinShow = false;
                            if (localStorage.editorContent) {
                                tinymce.get('tinymceEditer').setContent(localStorage.editorContent);
                            }
                        });
                        editor.on('keydown', function (e) {
                            localStorage.editorContent = tinymce.get('tinymceEditer').getContent();
                        });
                    }
                });
            });
        },
        huoi(){
            console.log(tinyMCE.activeEditor.getContent())
        }
    },
    mounted () {
        this.init();
    },
    destroyed () {
        tinymce.get('tinymceEditer').destroy();
    }
};
</script>

<style>

</style>

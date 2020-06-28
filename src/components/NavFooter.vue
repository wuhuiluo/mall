<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="../../public/imgs/logo-footer.png">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="wuhuiluo.github.io">github地址</a><span>|</span>
            <a href="javascript:;">仿网易云播放器</a><span>|</span>
            <a href="javascript:;">仿网易云播放器</a><span>|</span>
            <a href="javascript:;">仿网易云播放器</a><span>|</span>
        </div>
        <div class="copyright">
            CopyRight ©2020
            <span class="domain">吴辉洛</span>
            不要放弃直到做对为止
        </div>
    </div>
</template>


<script>
export default {
    name: "nav-footer"
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';
.footer {
    @include flex();
    flex-direction: column;
    height: 234px;
    font-size: 16px;
    border-top: 4px solid #FF6600;
    background-color: #333;
    color: #999;
    .footer-logo {
        margin-top: 46px;
        margin-bottom: 31px;
        img {
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link {
        a {
            color: #999;
            display: inline-block;
        }
        span {
            margin: 0 10px;
        }
        margin-bottom: 20px;
    }
    .copyright {
        margin-bottom: 10px;
        .domain {
            color: #FF6600;
        }
    }
}
</style>

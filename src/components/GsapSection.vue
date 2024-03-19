<template>
    <div>
        <router-link to="/helloworld">Go to home</router-link>
        <section class="screen section1">
            <div class="kv-content">
                <img src="../assets/kv.webp" alt="" />
            </div>
        </section>

        <section class="screen section2">
            <div class="summary-content">
                <video src="../media/summary.mp4" class="summary"></video>
                <p class="text1">
                    流动山海纹 <br />
                    光影层叠，山海流淌
                </p>
                <p class="text2">
                    东方灵韵 山海情
                </p>
            </div>
        </section>

        <section class="screen section3">
            <div class="color-img">
                <img src="../assets/color1.webp" alt="" class="color1" />
                <img src="../assets/color2.webp" alt="" class="color2" />
                <img src="../assets/color3.webp" alt="" class="color3" />
                <img src="../assets/color4.webp" alt="" class="color4" />
            </div>
        </section>

        <section class="screen section4">
            <div class="parallel">
                <div class="page1">
                    <p class="title">美学创作大师</p>
                    <video src="../media/aesthetics1.mp4" class="video1" muted></video>
                    <div class="info">
                        重塑每一秒 <br />
                        自在享受视频拍摄吧！<br />
                        理想身材相机直出，<br />
                        让每一刻的出镜更自由纯粹。
                    </div>
                </div>
                <div class="page2">
                    <video src="../media/aesthetics2.mp4" class="video2" muted></video>
                    <div class="info">
                        <h4>放手去拍，自动成片</h4>
                        <p>Vlog 拍摄配套电影级滤镜，实时更新，免费</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="screen section5">
            <div class="rom-content">
                <div class="rom-txt">512GB</div>
                <div class="rom-img">
                    <img src="../assets/rom1.webp" alt="" class="pic1" />
                    <img src="../assets/rom2.webp" alt="" class="pic2" />
                    <img src="../assets/rom3.webp" alt="" class="pic3" />
                    <img src="../assets/rom4.webp" alt="" class="pic4" />
                    <img src="../assets/rom5.webp" alt="" class="pic5" />
                    <img src="../assets/rom6.webp" alt="" class="pic6" />
                    <img src="../assets/rom7.webp" alt="" class="pic7" />
                </div>
            </div>
        </section>
    </div>
</template>


<script setup>
import '../style/gsapSection.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router'

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    // 第一屏幕滚动
    ScrollTrigger.create({
        trigger: ".section1",
        start: "top top",
        end: "+=1000",
        scrub: true,
        animation:
            // 第一屏幕图片由大变小
            gsap.timeline()
                .fromTo('.kv-content', { scale: 1 }, { scale: 0.5 })
                // 第二屏幕时评由小变大
                .fromTo('.summary-content', { width: '50%', height: "50vh" }, { width: "100%", height: "100vh" }, '<'),
    });

    // 第二屏幕滚动
    ScrollTrigger.create({
        trigger: ".section2",
        start: "top top",
        end: "+=5000",
        scrub: true,
        pin: true, // 固定屏幕
        // onUpdate ScrollTrigger 的进度更改（意味着滚动位置更改）时都会调用
        onUpdate(self) {
            // 播放视频
            const summary = document.querySelector('.summary')
            try {
                // 视频播放进度随着滚动条变化
                // self.progress 整体进度 0-1
                // summary.duration 视频的总时长
                summary.currentTime = self.progress * summary.duration
            } catch (error) {
                console.log(error)
            }
        },
        animation:
            gsap.timeline()
                .to('.text1', { top: '10rem', opacity: "1" })
                .to('.text1', { top: '0', opacity: "0" })
                .to('.text2', { top: '32rem', opacity: "0" })
                .to('.text2', { top: '28rem', opacity: "1" })
    });

    // 第三屏幕滚动
    ScrollTrigger.create({
        trigger: ".section3",
        start: "top top",
        end: "+=1000",
        pin: true,
    });

    ScrollTrigger.create({
        trigger: ".color-img",
        start: "top-=500 top",
        end: "+=3000",
        scrub: true,
        animation:
            gsap.timeline()
                .fromTo('.color1', { 'margin-left': '90em', opacity: 0 }, { 'margin-left': 0, opacity: 1 }, '<')
                .fromTo('.color2', { 'margin-left': '100em', scale: 1.3 }, { 'margin-left': 0, scale: 1 }, '<')
                .fromTo('.color3', { 'margin-left': '110em', scale: 1.6 }, { 'margin-left': 0, scale: 1 }, '<')
                .fromTo('.color4', { 'margin-left': '120em', scale: 1.9 }, { 'margin-left': 0, scale: 1 }, '<')
                .fromTo('.color1', { 'margin-left': '0', opacity: 1 }, { 'margin-left': '-120em', opacity: 1 }, '>')
                .fromTo('.color2', { 'margin-left': '0', scale: 1 }, { 'margin-left': '-110em', scale: 1.3 }, '<')
                .fromTo('.color3', { 'margin-left': '0', scale: 1 }, { 'margin-left': '-100em', scale: 1.6 }, '<')
                .fromTo('.color4', { 'margin-left': '0', scale: 1 }, { 'margin-left': '-90em', scale: 1.9 }, '<')
    });

    // 第四屏幕滚动
    ScrollTrigger.create({
        trigger: ".section4",
        start: "top top",
        end: "+=3000",
        pin: true,
    });

    ScrollTrigger.create({
        trigger: ".parallel",
        start: "top top",
        end: "+=3000",
        scrub: true,
        animation:
            gsap.timeline()
                .fromTo(".title", { opacity: 1 }, { opacity: 0 })
                .fromTo(".video1", { marginTop: "100%" }, {
                    marginTop: 0,
                    onStart() {
                        const video1 = document.querySelector('.page1 .video1')
                        video1.currentTime = 0
                        video1.play()
                    }
                })
                .fromTo(".info", { opacity: 0 }, { opacity: 1 })
                .fromTo(".page1", { "left": 0 }, { "left": "-128em" }, ">")
                .fromTo(".page2", { "left": "128em" }, {
                    "left": 0,
                    onStart() {
                        const video2 = document.querySelector('.page2 .video2')
                        video2.currentTime = 0
                        video2.play()
                    }
                }, "<")
    });

    // 第五屏幕滚动
    ScrollTrigger.create({
        trigger: ".section5",
        start: "top top",
        end: "+=5000",
        pin: true,
    });

    ScrollTrigger.create({
        trigger: ".rom-content",
        start: "top+=500 top",
        end: "+=5000",
        scrub: true,
        animation:
            gsap.timeline()
                .fromTo('.rom-txt', { opacity: 1, marginTop: 0 }, { opacity: 0, marginTop: '-3em' })
                .fromTo('.pic4', { width: "18.75em" }, { width: '16.75em' })
                .fromTo('.pic1', { left: "55.125em" }, { left: '14.3em' }, '<')
                .fromTo('.pic7', { right: "55.125em" }, { right: '14.3em' }, '<')
                .fromTo('.pic2', { left: "55.125em" }, { left: '26.1.3em' }, '<')
                .fromTo('.pic6', { right: "55.125em" }, { right: '26.1em' }, '<')
                .fromTo('.pic3', { left: "55.125em" }, { left: '39.8em' }, '<')
                .fromTo('.pic5', { right: "55.125em" }, { right: '39.8em' }, '<')
    });
})
</script>

<style lang="scss" scoped></style>
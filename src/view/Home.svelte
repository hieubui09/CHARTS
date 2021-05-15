<script>
    import Header from "../layout/Header.svelte";
    import Footer from "../layout/Footer.svelte";
    import { chart } from "svelte-apexcharts";
    var options = {
        series: [
            {
                name: "Net Profit",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
                name: "Revenue",
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
            {
                name: "Free Cash Flow",
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            },
        ],
        chart: {
            type: "bar",
            height: 650,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            categories: [
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
            ],
        },
        yaxis: {
            title: {
                text: "$ (thousands)",
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands";
                },
            },
        },
    };
    let changeMenu = false;
    function navMenu() {
        changeMenu = !changeMenu;
    }
    let charts = false;
    function navMenuChart() {
        charts = !charts;
    }
</script>

<Header />
<div class="wrapper">
    <div class="container">
        <!-- slidebar -->
        <div class="slidebar">
            <div class="tesst">
                <div class="logo">
                    <img src="images/logo.png" alt="" />
                    <img class="icon" src="images/img_02.png" alt="" />
                </div>
                <h2>Navigation</h2>
            </div>
            <div class="nav--block" on:click={navMenu}>
                <div class="nav__block">
                    <img src="images/img_03.png" alt="" />
                    <p>Blockchain explorer</p>
                    <div>
                    {#if !changeMenu}
                            <img src="images/img_up.png" alt="" />
                    {:else}                  
                            <img src="images/img_dow.png" alt="" />                       
                    {/if}
                    </div>
                </div>
            </div>
            <div class="nav" class:nav--active={changeMenu}>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Search
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Blocks
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Coins
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Top farmers
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Top pools
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Top addresses
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Biggest spenders
                </div>
            </div>
            <div class="nav--block" on:click={navMenuChart}>
                <div class="nav__block">
                    <img src="images/img_03.png" alt="" />
                    <p>Charts</p>
                    <div>
                        {#if !charts}
                                <img src="images/img_up.png" alt="" />
                        {:else}                  
                                <img src="images/img_dow.png" alt="" />                       
                        {/if}
                        </div>
                </div>
            </div>
            <div class="navChart" class:navChart--active={charts}>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Netspace
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Chia (XCH) Price
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />XCH/TiB Day
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />SeaTiB Hour/XCHrch
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Unique address count
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Top farmers
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Top pools
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Network decentralisation
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Proof of space size
                </div>
                <div class="item">
                    <img src="images/Ellipse 1.png" alt="" />Difficulty
                </div>
               
            </div>
        </div>

        <!-- Page Content -->
        <div class="content">
            <div class="content__first">
                <img src="images/img_01.png" alt="" />
                <p>Interested in joining a pool?</p>
                <h4>Fill out the Chia community pooling survey</h4>
            </div>
            <div class="content__center">
                <div class="title">
                    <div class="title__logo">
                        <img src="images/Frame.png" alt="">
                    </div>
                    <div class="title__name">
                            <h1>Netspace (PiB)</h1>
                            <h2>Space allocated to Chia network™</h2>
                    </div>
                </div>
                <div class="chart" id="chart" use:chart={options} />
            </div>
            <div class="content__final" >
                <div class="nav__final">
                    <div class="item">Homepage</div>
                    <div class="item">Blockchain explorer</div>
                    <div class="item">Charts</div>
                    <div class="item">Search</div>
                    <div class="item">Top farmers</div>
                    <div class="item">Top pools</div>
                    <div class="item">Top addresses</div>
                    <div class="item">Biggest spenders</div>
                    <div class="item">Advertise</div>
                </div>
                <div class="nav__end">
                    <div>chiaexplorer.com © 2021</div>
                    <h3>CHIA NETWORK INC, CHIA™, the CHIA BLOCKCHAIN™,
                         the CHIA PROTOCOL™, CHIALISP™ and the “leaf Logo” (including the leaf logo alone when
                          it refers to or indicates Chia), are trademarks or registered
                        trademarks of Chia Network, Inc., a Delaware corporation, used under license.</h3>

                </div>
            </div>

        </div>
    </div>
</div>
<Footer />

<style lang="scss">
    @import "../styles/Main.scss";
</style>

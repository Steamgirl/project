<template>
	<view class='app-height-100'>
		<rich-text :nodes="html" style='height:100%;width:100%'></rich-text>
	</view>
</template>

<script>
	import htmltoJson from '../../../static/scripts/HTMLParser/html-parser.js'
	export default{
		data(){
			return{
				nodes:[],
				html:`<section>
    <form name="_newscontent_fromname">
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">根据教育部关于普通高等学校艺术类专业招生的有关规定，结合我校实际，学校决定2020年播音与主持艺术专业、戏剧影视文学专业、表演专业、设计学类（含环境设计专业、产品设计专业）招收艺术类学生。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">一、播音与主持艺术</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">（一）招生计划</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">播音与主持艺术专业，本科，学制四年。2020年招生计划24人，拟分省招生计划如下（最终以各省级招生考试机构公布的招生计划为准）。</span>
        </p>
        <table cellspacing="0" cellpadding="0" height="179" style="width: 495px;" width="100%">
            <tbody>
                <tr class="firstRow">
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">省份</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">辽宁省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">黑龙江</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">河北省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">浙江省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">安徽省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">河南省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">湖北省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">湖南省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">重庆市</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">四川省</span>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">计划数</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">2</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">2</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">2</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">2</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">3</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">3</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">3</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">2</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">3</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">2</span>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">省统考专业</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">播音与</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">主持艺术</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">播音与</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">主持艺术</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">播音与</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">主持艺术</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">播音</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">主持类</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">播音与</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">主持艺术</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">播音与</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">主持类</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word; word-break: break-all;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">播音与</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">主持艺术</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">播音与</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">主持艺术类</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">播音与</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">主持艺术</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">播音与主持</span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">录取时，根据各省级招生考试机构要求，不分文理科排序录取的省（自治区、直辖市）文理统一排序录取；严格区分文理科排序录取的省（自治区、直辖市）只招收文科考生。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">（二）报名条件</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">1、考生必须符合2020年教育部及生源省份艺术类专业招生条件，品行端正、身心健康。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">2、考生必须参加生源省份省级招生考试机构组织的专业统考（或联考），专业统考（或联考）分数须达到生源所在省（自治区、直辖市）统考（或联考）总分满分的80%及以上（四舍五入取整）。播音与主持艺术专业录取时认可各省专业统考（或联考）成绩为专业考试成绩，不再举行校考。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">3、考生必须参加2020年全国普通高考，且高考成绩（含政策性加分）须达到生源所在省（自治区、直辖市）第一批本科录取控制分数线。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">（三）录取办法</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">若省级招生考试机构实行平行志愿投档，则按其投档办法执行，从高分到低分择优录取。若省级招生考试机构不实行平行志愿投档，则将在高考成绩（含政策性加分）达到我校最低要求的考生中，根据招生计划，按照考生省级统考成绩从高分到低分择优录取，宁缺毋滥。考生省级统考（或联考）成绩相同时，高考成绩（不含政策性加分）高者优先录取。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">二、戏剧影视文学</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">（一）招生计划</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">戏剧影视文学专业，本科，学制四年。2020年招生计划30人，拟分省招生计划如下（最终以各省级招生考试机构公布的招生计划为准）。</span>
        </p>
        <table width="100%" align="center" cellspacing="0" cellpadding="0" height="174" style="width: 495px;">
            <tbody>
                <tr class="firstRow">
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">省份</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">辽宁省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">浙江省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">江苏省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">安徽省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">福建省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">山东省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">河南省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">湖北省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">湖南省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">重庆市</span>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">计划数</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">2</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">2</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">2</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">2</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">2</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">4</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">3</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">8</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">3</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">2</span>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">省统考专业</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">戏剧影视</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">文学</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">编导类</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">编导</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">广播电视</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">编导</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">编导</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">文学编导类</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">编导制作类</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">广播电视</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">编导</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">编导类</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">编导类</span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">录取时，根据各省级招生考试机构要求，不分文理科排序录取的省（自治区、直辖市）文理统一排序；严格区分文理科排序录取的省（自治区、直辖市）只招收文科考生。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">（二）报名条件</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">1、考生必须符合2020年教育部及生源省份艺术类专业招生条件，品行端正、身心健康。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">2、考生必须参加生源省份省级招生考试机构组织的专业统考（或联考），并取得统考本科合格证。戏剧影视文学专业录取时认可各省专业统考（或联考）成绩为专业考试成绩，不再举行校考。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">3、考生必须参加2020年全国普通高考，且高考成绩（含政策性加分）须达到生源所在省（自治区、直辖市）第一批本科录取控制分数线。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">（三）录取办法</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">若省级招生考试机构实行平行志愿投档，则按其投档办法执行，从高分到低分择优录取。若省级招生考试机构不实行平行志愿投档，则将在高考成绩（含政策性加分）达到我校最低要求的考生中，根据招生计划，按照考生综合成绩（综合成绩＝省级统考成绩＋高考成绩（含政策性加分））分省从高分到低分择优录取，宁缺毋滥。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">三、表演</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">（一）招生计划</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">表演专业，本科，学制四年。2020年招生计划27人，拟分省招生计划如下（最终以各省级招生考试机构公布的招生计划为准）。</span>
        </p>
        <table width="100%" align="center" cellspacing="0" cellpadding="0" height="172" style="width: 495px;">
            <tbody>
                <tr class="firstRow">
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">省份</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">辽宁省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">浙江省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">福建省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">湖北省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">湖南省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">重庆市</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">四川省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">上海市</span>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">计划数</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">4</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">3</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">2</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">6</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">4</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">3</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">3</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">2</span>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">省统考专业</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">表演</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">影视</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">表演类</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">影视</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">表演</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">表演</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">表演类</span>
                        </p>
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">（戏剧表演）</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">表演</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">戏剧影视表演</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">表演类</span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">录取时，根据各省级招生考试机构要求，不分文理科排序录取的省（自治区、直辖市）文理统一排序；严格区分文理科排序录取的省（自治区、直辖市）只招收文科考生。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">（二）报名条件</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">1、考生必须符合2020年教育部及生源省份艺术类专业招生条件，品行端正、身心健康。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">2、考生必须参加生源省份省级招生考试机构组织的专业统考（或联考），并取得统考本科合格证。表演专业录取时认可各省专业统考（或联考）成绩为专业考试成绩，不再举行校考。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">3、考生必须参加2020年全国普通高考，且高考成绩（含政策性加分）须达到生源所在省（自治区、直辖市）高考总分满分的56%及以上（四舍五入取整）且不低于所在省（自治区、直辖市）划定的艺术类本科专业高考文化课录取控制分数线。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">（三）录取办法</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">若省级招生考试机构实行平行志愿投档，则按其投档办法执行，从高分到低分择优录取。若省级招生考试机构不实行平行志愿投档，则将在高考成绩（含政策性加分）达到我校最低要求的考生中，根据招生计划，按照考生省级统考成绩从高分到低分择优录取，宁缺毋滥。考生省级统考成绩相同时，高考成绩（不含政策性加分）高者优先录取。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">四、设计学类（含环境设计专业、产品设计专业）</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">环境设计专业、产品设计专业按设计学类招收美术类考生，进校后分专业。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">（一）招生计划</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">设计学类专业，本科，学制四年。2020年招生计划50人，拟分省招生计划如下（最终以各省级招生考试机构公布的招生计划为准）。</span>
        </p>
        <table cellspacing="0" cellpadding="0" width="100%" height="95" style="width: 495px;">
            <tbody>
                <tr class="firstRow">
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">省份</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">北京市</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">天津市</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">河南省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">湖北省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">湖南省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">广东省</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">江苏省</span>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">计划数</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">3</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">3</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">6</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">14</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">9</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">9</span>
                        </p>
                    </td>
                    <td height="25" align="center" valign="top" style="line-height: 25px; border: 1px solid rgb(0, 0, 0); padding: 2px 3px; word-wrap: break-word;">
                        <p style="text-align:left;" align="left">
                            <span style="font-size: 14px; color: #595959;">6</span>
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">录取时，根据各省级招生考试机构要求，不分文理科排序录取的省（自治区、直辖市）文理统一排序；严格区分文理科排序录取的省（自治区、直辖市）根据分省招生计划数按文理科1:2分别排序。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">（二）报名条件</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">1、考生必须符合2020年教育部及生源省份艺术类专业招生条件，品行端正、身心健康，且非色盲、色弱。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">2、考生必须参加生源省份省级招生考试机构组织的美术类专业统考（或联考），并取得统考本科合格证。设计学类专业录取时认可各省专业统考（或联考）成绩为专业考试成绩，不再举行校考。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">3、考生必须参加2020年全国普通高考，且高考成绩（含政策性加分）须达到生源所在省（自治区、直辖市）第一批本科录取控制分数线。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">（三）录取办法</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">若省级招生考试机构实行平行志愿投档，则按其投档办法执行，从高分到低分择优录取。若省级招生考试机构不实行平行志愿投档，则将在高考成绩（含政策性加分）达到我校最低要求的考生中，根据招生计划，按照考生综合成绩<span style="font-size: 14px; color: #FF0000;">（综合成绩＝省级统考成绩＋高考成绩（含政策性加分））</span>分省从高分到低分择优录取，宁缺毋滥。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">五、有关说明</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">1、对于实行高考综合改革试点及合并批次改革省份，第一批本科录取控制分数线按教育部及相应省份省级招生考试机构的规定执行，不低于相应录取控制参考分数线。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">2、艺术类专业录取的学生不得转入其他专业学习。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">3、若发现考生有弄虚作假等违纪、作弊或其他不诚信行为，一经认定，将依照国家、学校相关规定，根据查实时间取消其考试成绩、录取资格、入学资格等，已取得学籍者将取消学籍，并报生源省级招生考试机构，空缺名额不递补。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">六、监督机制</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">武汉大学监察部全程监督艺术类招生工作。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">考生申诉及举报联系方式：027－68754231，wdzsb@whu.edu.cn，jwo@whu.edu.cn。</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">七、咨询方式</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">武汉大学招生办公室</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">办公地点：武汉大学本科生院大楼南楼西侧205、206室</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">咨询电话：027－68754231</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">网 址：http://aoff.whu.edu.cn</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">新浪微博：http://t.sina.com.cn/2062659001</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">微信公众平台：武大招办</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <img src="https://aoff.whu.edu.cn/__local/D/6C/07/C05DDC2D1F57364A09061E213CE_EF18246B_101AA.png" vsbhref="vurl" vurl="/_vsl/D6C07C05DDC2D1F57364A09061E213CE/EF18246B/101AA" vheight="203" vwidth="195" orisrc="/__local/D/6C/07/C05DDC2D1F57364A09061E213CE_EF18246B_101AA.png" data-ratio="1"/>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">相关学院</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">新闻与传播学院：027-68752685</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">城市设计学院：027-68772048</span>
        </p>
        <p style="text-align:left; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="left">
            <span style="font-size: 14px; color: #595959;">艺术学院：027-68752380，027-68753557</span>
        </p>
        <p style="text-align: right; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="right">
            <span style="font-size: 14px; color: #595959;">                                                                                                    武汉大学招生办公室</span>
        </p>
        <p style="text-align: right; margin: 10px 20px; line-height: 1.5em; letter-spacing: 1.25px;" align="right">
            <span style="font-size: 14px; color: #595959;">                                                                                                       2019年12月19日</span>
        </p>
    </form>
</section>`
			}
		},
		mounted(){
			this.parseHtml()
		},
		methods:{
			parseHtml(){
				console.log(13)
				this.nodes=new htmltoJson(richtext)
				var richtext = this.html.replace(/ height="\d+"/g, "height='auto'");
				console.log(this.nodes)
			}
		}
	}
	
</script>

<style>
</style>

package com.okay.controller;

import com.okay.domain.entity.MicroDust;
import com.okay.service.SchedulerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathFactory;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@EnableScheduling
@org.springframework.web.bind.annotation.RestController
public class SchedulerController { // 정기적으로 반복 작업을 수행하는 Controller

    @Autowired
    SchedulerService schedulerService;

    // 오늘 날짜
    LocalDate today = LocalDate.now();
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
    String now = today.format(formatter);

    BufferedReader br = null;

    //DocumentBuilderFactory 생성
    DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
    DocumentBuilder builder;
    Document doc = null;

    @Scheduled(fixedDelay = 10000) // 1시간에 한번 갱신 3600000
    public void microDust(){

        factory.setNamespaceAware(true);

        try {
            // Open API 호출출
           String urlStr ="http://apis.data.go.kr/1480523/MetalMeasuringResultService/MetalService?serviceKey=pygR8TY6ssILm9rtlqhq%2BuhPL8jhCkpVKBKWFtg8TPzXmf5cDVqYDbZgp4KkadbTjNd7G1reUFUZjVn8BfPbiQ%3D%3D&pageNo=1&numOfRows=12&resultType=XML&date="+now+"&stationcode=1&itemcode=90303&timecode=RH02";

            URL url = new URL(urlStr);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setRequestMethod("GET");

            // 응답 읽기
            br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream(), "UTF-8"));
            String result = "";
            String line = "";

            result = br.readLine();
            while ((line = br.readLine()) != null) {
                result = result + line + "\n";
            }

            System.out.println("MicroDust XML Parsing Sucess");

            // xml 파싱하기
            InputSource is = new InputSource(new StringReader(result));

            builder = factory.newDocumentBuilder();
            doc = builder.parse(is);
            XPathFactory xpathFactory = XPathFactory.newInstance();
            XPath xpath = xpathFactory.newXPath();

            XPathExpression expr = xpath.compile("//items/item");
            NodeList nodeList = (NodeList) expr.evaluate(doc, XPathConstants.NODESET);

            String[] timeArr = new String[nodeList.getLength()];
            String[] contentArr = new String[nodeList.getLength()];

            for (int i = 0; i < nodeList.getLength(); i++) {
                NodeList child = nodeList.item(i).getChildNodes();
                MicroDust microDust = new MicroDust();
                for (int j = 0; j < child.getLength(); j++) {
                    Node node = child.item(j);

                    microDust.setId((long) j);
                    if(node.getNodeName().equals("sdate")){ // 시간 추출
                        System.out.println(1);
                        timeArr[i] = node.getTextContent().substring(8,10);
                        System.out.println(2);
                        microDust.setRegDate(node.getTextContent());
                        System.out.println(3);
                    }

                    if(node.getNodeName().equals("value")){ // 값 추출
                        System.out.println(4);
                        contentArr[i] = node.getTextContent();
                        System.out.println(5);
                        System.out.println(node.getTextContent());
                        microDust.setValue(node.getTextContent());
                        System.out.println(6);
                    }

                }
                schedulerService.create(microDust);
            }


        }catch (Exception e){
            System.out.println("MicroDust 에러 처리 필요");
        }



    }

    @Scheduled(fixedDelay = 86400000) // 하루에 한번씩 갱신
    public void corona(){

    }
}

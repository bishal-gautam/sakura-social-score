package com.sakura.mediascore;

import com.google.cloud.language.v1.AnalyzeSentimentResponse;
import com.google.cloud.language.v1.Document;
import com.google.cloud.language.v1.LanguageServiceClient;
import com.google.cloud.language.v1.Sentiment;
import com.sakura.models.NLPResult;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
public class NLPController {

    @RequestMapping("/nlp")
    public NLPResult nlp(@RequestParam(value = "text") String text) {
        NLPResult result =  new NLPResult();
        try (LanguageServiceClient language = LanguageServiceClient.create()) {
            Document doc = Document.newBuilder()
                    .setContent(text)
                    .setType(Document.Type.PLAIN_TEXT)
                    .build();
            AnalyzeSentimentResponse response = language.analyzeSentiment(doc);
            Sentiment sentiment = response.getDocumentSentiment();
            if (sentiment == null) {
                return null;
            } else {
                result.setScore(sentiment.getScore());
                result.setMagnitude(sentiment.getMagnitude());
            }
        }catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @RequestMapping(value = "/hy", method = RequestMethod.GET)
    public String hello(){
        return "Hello world";
    }

}

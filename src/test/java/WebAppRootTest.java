import org.junit.Test;
import static org.junit.Assert.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class WebAppRootTest {

    @Test
    public void testRootEndpoint() throws Exception {
        // Connect to the root endpoint
        URL url = new URL("http://localhost:3000/");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");

        // Read the response
        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        String inputLine;
        StringBuilder content = new StringBuilder();
        while ((inputLine = in.readLine()) != null) {
            content.append(inputLine);
        }

        in.close();
        conn.disconnect();

        // Check if the response contains the expected content
        String expectedContent = "Empowering Minds, Illuminating Futures"; 
        assertTrue(content.toString().contains(expectedContent));
    }
}

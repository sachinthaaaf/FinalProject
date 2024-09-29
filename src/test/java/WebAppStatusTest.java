import org.junit.Test;
import static org.junit.Assert.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class WebAppStatusTest {

    @Test
    public void testStatusEndpoint() throws Exception {
        URL url = new URL("http://localhost:3000/status");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");

        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        String inputLine;
        StringBuilder content = new StringBuilder();
        while ((inputLine = in.readLine()) != null) {
            content.append(inputLine);
        }

        in.close();
        conn.disconnect();

        assertTrue(content.toString().contains("Status: OK"));
    }
}

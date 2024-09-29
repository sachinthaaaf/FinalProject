import org.junit.Test;
import static org.junit.Assert.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class WebAppStatusTest {

    @Test
    public void testStatusEndpoint() throws Exception {
        // Assume the application is running on localhost:3000
        URL url = new URL("http://localhost:3000/status");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");

        // Get the response
        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        String inputLine;
        StringBuilder content = new StringBuilder();
        while ((inputLine = in.readLine()) != null) {
            content.append(inputLine);
        }

        // Close connections
        in.close();
        conn.disconnect();

        // Assert the response contains "Status: OK"
        assertTrue(content.toString().contains("Status: OK"));
    }
}

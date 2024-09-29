import org.junit.Test;
import static org.junit.Assert.*;
import java.net.HttpURLConnection;
import java.net.URL;

public class WebAppNotFoundTest {

    @Test
    public void testNotFoundEndpoint() throws Exception {
        // Assume the application is running on localhost:3000
        URL url = new URL("http://localhost:3000/nonexistent");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");

        // Check the response code
        int responseCode = conn.getResponseCode();
        conn.disconnect();

        // Assert that the response code is 404
        assertEquals(404, responseCode);
    }
}

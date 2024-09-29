import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class MyAppTest {

    @Test
    public void testHelloWorld() {
        String expected = "Hello, World!";
        String actual = getHelloWorld();
        assertEquals(expected, actual);
    }

    public String getHelloWorld() {
        return "Hello, World!";
    }
}

using Xunit;
using API.Controllers;
using Moq;
using Microsoft.Extensions.Logging;

namespace IntegrationTest
{
    public class ControllerTest
    {
        [Fact]
        public void WeatherTest()
        {
            //Given
            var mock = new Mock<ILogger<WeatherForecastController>>();
            ILogger<WeatherForecastController> logger = mock.Object;
            var nombre = new WeatherForecastController(logger).GetNombre();

            //When
            Assert.Equal("cesar",nombre);
            //Then
        }
       
    }
}
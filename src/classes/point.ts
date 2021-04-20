export class Point {
    index: number;
    longitude: number;
    latitude: number;
    precision: number;

    constructor(longitude: number, latitude: number, precision: number) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.precision = precision;
    }

    distance(point: Point) {
        if (this.latitude == point.latitude && this.longitude == point.longitude) {
            return 0;
        }
        const earthRadius = 6371 // 6371km
        const angle = this.centralSubtendedAngle(this, point);
        return 2 * Math.PI * earthRadius * (angle / 360);
    }

    private centralSubtendedAngle = (point1: Point, point2: Point) => {
        const degreesToRadians = degrees => degrees * (Math.PI / 180);
        const radiansToDegrees = radians => radians * (180 / Math.PI);
        const point1LatRadians = degreesToRadians(point1.latitude)
        const point2LatRadians = degreesToRadians(point2.latitude)

        return radiansToDegrees(
            Math.acos(
                Math.sin(point1LatRadians) * Math.sin(point2LatRadians) +
                Math.cos(point1LatRadians) * Math.cos(point2LatRadians) * Math.cos(Math.abs(point1.longitude - point2.longitude))
            )
        )
    }

    distancePythagoras(point: Point) {
        if (this.latitude == point.latitude && this.longitude == point.longitude) {
            return 0;
        }
        const earthRadius = 6371; // 6371km
        const x = (this.longitude - point.longitude) * Math.cos((this.latitude + point.latitude)/2);
        const latitudeDif = this.latitude - point.latitude;
        return Math.sqrt(x*x + latitudeDif*latitudeDif) * earthRadius;
    }
}

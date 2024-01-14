export function logErrorToService(error: Error) {
  // TODO: Implement logging to a service. eg. "Sentry".
  console.error("Caught an error:", error);
}
export function getRatingStars(rating: number, limit = 5) {
  return ("★".repeat(limit) + "☆".repeat(limit)).slice(
    limit - rating,
    limit * 2 - rating
  );
}

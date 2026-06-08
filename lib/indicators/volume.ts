interface VolumeResult {
  volume: number;
  volume_strength: "high" | "medium" | "low";
}

export function calculateVolume(
  volumes: number[]
): VolumeResult | null {
  if (volumes.length === 0) return null;

  const last = volumes[volumes.length - 1];
  const avg = volumes.reduce((a,b) => a+b,0) / volumes.length;

  let volume_strength: "high" | "medium" | "low" = "medium";

  if (last > 1.5 * avg) volume_strength = "high";
  else if (last < 0.5 * avg) volume_strength = "low";

  return {
    volume: last,
    volume_strength,
  };
}

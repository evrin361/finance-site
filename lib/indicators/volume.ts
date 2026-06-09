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

if (last > avg * 1.2) volume_strength = "high";
else if (last < avg * 0.8) volume_strength = "low";

  return {
    volume: last,
    volume_strength,
  };
}
